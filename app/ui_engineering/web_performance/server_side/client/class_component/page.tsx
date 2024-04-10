
import Head from '@/app/ui_engineering/web_performance/server_side/client/class_component/(components)/componentA';
import Body from '@/app/ui_engineering/web_performance/server_side/client/class_component/(components)/componentB';
import Form from '@/app/ui_engineering/web_performance/server_side/client/class_component/(components)/componentC';
import Footer from '@/app/ui_engineering/web_performance/server_side/client/class_component/(components)/componentD';


export default async function Page() {
    return (
      <main>
        <Head />
        <Body />
        <Form />
        <Footer />

      </main>
    );
}