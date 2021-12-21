//Package Importing
import React from 'react';

//Components
import { MobileLayout } from './components/mobile-layout/mobile-layout-component.jsx' 
import { ImageView } from './components/image-view/image-view.component';
import { ContentBox } from './components/contents/content-box.component';
import { TextContent } from './components/text-content/text-content.component';
import { Button } from './components/button/button.component';
import { Description } from './components/description/description.component';

//CSS
import './App.css';


const App = () => {
  const onHoverProperty = 'hover:bg-blue-200 duration-300';
  
  return(
      <div className="App h-full flex items-center before:content-[''] before:absolute before:w-full before:h-full before:opacity-[0.1] before:bg-blue-300 before:bg-background-pattern before:-z-10">
        <MobileLayout className="bg-slate-50 aspect-[1/1.9]">
            <ImageView
            backgroundImage={'/assets/body-background/body-background.jpg'}
            className={onHoverProperty}/>
            <ContentBox>
              <TextContent
                headerText={["Discover your",<br/>,"Dream job Here"]}
                paragraphText="Explore all the most exiting jobs based on your experience and field of study"
                className="mt-6 mb-4"/>
              <Button className={onHoverProperty}>SIGN IN</Button>
              <Description className="mt-2 text-xs text-slate-500">or continue without account</Description>
            </ContentBox>
        </MobileLayout>
      </div>
    );
  }
export default App;