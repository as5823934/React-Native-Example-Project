import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            //how to create listview
            //init the data source
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        //tell list view how to render a singal rowrow
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView //create listview component
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    //application state, take properity from state object and 
    //provide them as props to the component of libraryList
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
