import React from 'react';
import { Tabs } from 'antd';
import { Wrapper } from './index.style';
import { useGlobalStateContext } from '../../state/GlobalProvider';

const { TabPane } = Tabs;

const Home = () => {
  const state = useGlobalStateContext();
  console.log(state);
  return (
    <Wrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Orders" key="1" className="tab-element">
          Tab 1
        </TabPane>
        <TabPane tab="Outdoor Activities" key="2" className="tab-element">
          Tab 2
        </TabPane>
      </Tabs>
    </Wrapper>
  );
};

export default Home;
