export default async function Page() {

  
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
       {process.env.SENSITIVE_DATA};
      </h1>

    </main>
  );
}