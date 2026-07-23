// Fake delay so it behaves like a real network call
const MOCK_DELAY = 400;
const delay = (data) => new Promise((res) => setTimeout(() => res(data), MOCK_DELAY));

const mockRecords = [
  {
    id: "r1",
    type: "Lab Report",
    title: "Complete Blood Count (CBC)",
    date: "2026-07-02",
    doctor: "Dr. Neha Kapoor",
    aiSummary: "Values are within normal range overall. Slightly low vitamin D.",
  },
  {
    id: "r2",
    type: "Prescription",
    title: "Post-consultation prescription",
    date: "2026-06-18",
    doctor: "Dr. Rakesh Verma",
    aiSummary: "5-day antibiotic course for a respiratory infection.",
  },
];

export function fetchPatientRecords() {
  return delay(mockRecords);
}

export function login({ role, email }) {
  return delay({
    token: "mock-jwt-token",
    user: {
      name: role === "doctor" ? "Dr. Neha Kapoor" : "Ayesha Rahman",
      email,
      role,
      oneHealthId: role === "patient" ? "OH-2026-48213" : undefined,
    },
  });
}
const mockConsents = [
  { id: "c1", doctorName: "Dr. Neha Kapoor", scope: "Full medical history", status: "approved" },
  { id: "c2", doctorName: "Dr. Aman Siddiqui", scope: "Lab reports only", status: "pending" },
];

export function fetchConsents() {
  return delay(mockConsents);
}

export function fetchPatientByOneHealthId(oneHealthId) {
  return delay({
    oneHealthId,
    name: "Ayesha Rahman",
    age: 29,
    bloodGroup: "B+",
    allergies: ["Penicillin"],
    records: mockRecords,
  });
}