import React from "react";
import TopNav from "./TopNav";
import PostInput from "./PostInput"; 
import BottomNav from "./BottomNav";
import List from "./List";


class Home extends React.Component {

    render(){
        return (
            <div>
                <TopNav />
                <PostInput />
                <List />
                <BottomNav />
            </div>
        );
    }
}

export default Home;