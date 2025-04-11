'use client';

import { useState } from 'react';
import { getDiseases, Disease } from '@/lib/diseases';

export default function AdminPage() {
  const [diseases, setDiseases] = useState<Disease[]>(getDiseases());

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement add logic
  };

  const handleUpdate = async (id: string) => {
    // Implement update logic
  };

  const handleDelete = async (id: string) => {
    // Implement delete logic
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* Add form */}
      {/* List of diseases with update and delete buttons */}
    </div>
  );
}
