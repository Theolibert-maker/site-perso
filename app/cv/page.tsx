import CVEntry from "@/components/CVEntry";

export default function Page() {
  return (
    <>
      <h1>Curriculum Vitae</h1>
      <CVEntry
        title="Industrial engineering student"
        employer="ECAM Brussels"
        date="2024 - 2029"
      >
        <p>Bachelor in electronics, currently in third year.</p>
      </CVEntry>
      <CVEntry title="Sales advisor" employer="Student job" date="2 years" />
    </>
  );
}