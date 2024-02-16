import React, { useState, useEffect } from 'react';
// Import Mojo CSS


type Department = {
  id: string;
  name: string;
};

type Commune = {
  id: string;
  name: string;
  departmentId: string;
};

// Dummy data for demonstration
const departments: Department[] = [
  { id: 'dept1', name: 'Department 1' },
  { id: 'dept2', name: 'Department 2' },
];

const communes: Commune[] = [
  { id: 'comm1', name: 'Commune 1', departmentId: 'dept1' },
  { id: 'comm2', name: 'Commune 2', departmentId: 'dept1' },
  { id: 'comm3', name: 'Commune 3', departmentId: 'dept2' },
];

const DynamicForm: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [filteredCommunes, setFilteredCommunes] = useState<Commune[]>([]);
  const [caseName, setCaseName] = useState<string>('');
  const [selectedCommune, setSelectedCommune] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  useEffect(() => {
    setFilteredCommunes(communes.filter(c => c.departmentId === selectedDepartment));
  }, [selectedDepartment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ caseName, selectedDepartment, selectedCommune, details });
    // Here you would typically send this data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="caseName">Nom de l'affaire:</label>
        <input id="caseName" value={caseName} onChange={(e) => setCaseName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="department">Département:</label>
        <select id="department" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">Select a department</option>
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="commune">Commune:</label>
        <select id="commune" value={selectedCommune} onChange={(e) => setSelectedCommune(e.target.value)}>
          <option value="">Select a commune</option>
          {filteredCommunes.map(comm => (
            <option key={comm.id} value={comm.id}>{comm.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="details">Précision:</label>
        <input id="details" value={details} onChange={(e) => setDetails(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;