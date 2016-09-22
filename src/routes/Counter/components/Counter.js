import React from 'react'
import {Button, NavBar, Icon, Accordion, List, Drawer} from 'antd-mobile'


const App1 = React.createClass({
    getInitialState() {
        return {
            open: false,
            position: 'left',
        };
    },
    onOpenChange(isOpen) {
        console.log(isOpen, arguments);
        this.setState({open: !this.state.open});
    },
    render() {
        const sidebar = (<List>
            <List.Body>
                {[...Array(20).keys()].map((i, index) => {
                    if (index === 0) {
                        return (<List.Item key={index}
                                           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                           multipleLine
                        >分类</List.Item>);
                    }
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                    >分类{index}</List.Item>);
                })}
            </List.Body>
        </List>);

        const drawerProps = {
            open: this.state.open,
            position: this.state.position,
            onOpenChange: this.onOpenChange,
        };
        return (<div style={{ height: '100%' }}>
            <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>
                基本
            </NavBar>
            <div className="drawer-container">
                <Drawer sidebar={sidebar}
                        dragHandleStyle={{ display: 'none' }}
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    {...drawerProps}
                >
                    请点击左上角
                </Drawer>
            </div>
        </div>);
    },
});

export const Counter = (props) => (
    <div style={{ margin: '0 auto' }}>
        <h2>Counter: {props.counter}</h2>
        <button className='btn btn-default' onClick={props.increment}>
            Increment
        </button>
        <Accordion
            defaultActiveKey="0"
        >
            <Accordion.Panel header="标题文字">
                <List.Item>子内容子内容</List.Item>
                <List.Item>子内容子内容</List.Item>
                <List.Item>子内容子内容</List.Item>
                <List.Item>子内容子内容</List.Item>
            </Accordion.Panel>
            <Accordion.Panel header="标题文字"><List.Item>this is panel content2 or other</List.Item></Accordion.Panel>
            <Accordion.Panel
                header="标题文字"><List.Item>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</List.Item></Accordion.Panel>
        </Accordion>
        {' '}
        <button className='btn btn-default' onClick={props.doubleAsync}>
            Double (Async)
        </button>
        <App1 />
    </div>
)

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default Counter
