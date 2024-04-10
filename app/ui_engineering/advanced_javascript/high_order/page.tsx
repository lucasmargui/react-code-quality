"use client"

import MyComponent from '@/app/ui_engineering/advanced_javascript/high_order/(components)/myComponent';
import withLogger from '@/app/ui_engineering/advanced_javascript/high_order/(components)/withLogger';
import withComponent from '@/app/ui_engineering/advanced_javascript/high_order/(components)/withParent';
import WrappedComponent from '@/app/ui_engineering/advanced_javascript/high_order/(components)/WrappedComponent';



const EnhancedComponentA = withLogger(MyComponent);

const EnhancedComponentB = withComponent(WrappedComponent);

export default async function Page() {

  
    return (
      <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          UI_Engineering
        </h1>
        <EnhancedComponentA />
        <EnhancedComponentB name="John" age={30} />

      </main>
    );
}