
import ExpensiveCalculation from '@/app/ui_engineering/web_performance/memoization_components/(components)/expensiveCalculation';
import Fatorial from '@/app/ui_engineering/web_performance/memoization_components/(components)/fatorial';

export default async function Page() {

  
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
       <Fatorial />
      </h1>

    </main>
  );
}