"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import clsx from "clsx";

type NameItem = {
  id: number;
  name: string;
  details: string;
};

const namesData: NameItem[] = [
  { id: 1, name: "Alice", details: "Alice is from Wonderland." },
  { id: 2, name: "Bob", details: "Bob is a builder." },
  { id: 3, name: "Charlie", details: "Charlie loves chocolate." },
];

export default function NameList() {
  const [selected, setSelected] = useState<number[]>([]);
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [showDetails, setShowDetails] = useState<NameItem | null>(null);
  const [showMultiDetails, setShowMultiDetails] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wasLongPressed = useRef(false);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

const handleClick = (item: NameItem) => {
  if (wasLongPressed.current) {
    wasLongPressed.current = false;
    return;
  }

  if (multiSelectMode) {
    toggleSelect(item.id);
  } else {
    setShowDetails(item);
  }
};

  const startPressTimer = (item: NameItem) => {
    timeoutRef.current = setTimeout(() => {
      wasLongPressed.current = true;
      setMultiSelectMode(true);
      setSelected((prev) =>
        prev.includes(item.id) ? prev : [...prev, item.id]
      );
    }, 400);
  };

  const clearPressTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {namesData.map((item) => (
          <Card
            key={item.id}
            onClick={() => handleClick(item)}
            onMouseDown={() => startPressTimer(item)}
            onMouseUp={clearPressTimer}
            onMouseLeave={clearPressTimer}
            onTouchStart={() => startPressTimer(item)}
            onTouchEnd={clearPressTimer}
            className={clsx(
              "cursor-pointer select-none transition-colors",
              selected.includes(item.id) ? "border-blue-500 bg-blue-100" : ""
            )}
          >
            <CardContent className="p-4">{item.name}</CardContent>
          </Card>
        ))}
      </div>

      {multiSelectMode && (
        <button
          onClick={() => setShowMultiDetails(true)}
          disabled={selected.length === 0}
        >
          Show Selected Details
        </button>
      )}

      {/* Single Detail Dialog */}
      {showDetails && (
        <Dialog open={!!showDetails} onOpenChange={() => setShowDetails(null)}>
          <DialogContent>
            <DialogTitle className="text-xl font-semibold">
              {showDetails.name}
            </DialogTitle>
            <p>{showDetails.details}</p>
          </DialogContent>
        </Dialog>
      )}

      {/* Multi Detail Dialog */}
      <Dialog
        open={showMultiDetails}
        onOpenChange={() => setShowMultiDetails(false)}
      >
        <DialogContent>
          <DialogTitle className="text-xl font-semibold mb-2">
            Selected Names
          </DialogTitle>
          {namesData
            .filter((item) => selected.includes(item.id))
            .map((item) => (
              <div key={item.id} className="mb-3">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm">{item.details}</p>
              </div>
            ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
