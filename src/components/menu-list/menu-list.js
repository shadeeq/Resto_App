import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuRequested,
        menuError,
        menuLoaded,
        itemAdded} from '../../actions';
import Spinner from '../spinner';


import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        this.props.RestoService.getData()
        .then(menuList => this.props.menuLoaded(menuList))
        .catch(err => this.props.menuError)
    }
    render() {
        const {menuList, loading, itemAdded} = this.props;

        if (loading) {
            return <Spinner/>
        }

        return (
            
            <ul className="menu__list">
                {
                    menuList.map(menuItem => {
                        return (
                            <MenuListItem key={menuItem.id} onItemAdd={itemAdded} menuItem={menuItem} />
                        )
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = state => {
    return {
        menuList: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuRequested,
    menuError,
    menuLoaded,
    itemAdded
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));