import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { genres } from '../app/utils'
export default class Search extends React.Component {
   
    state = {
    }

    componentDidMount() {
    }
    componentDidUpdate() {
    }

    onSelect = (genre) => {
        this.props.onChange(genre)
    }

    genre_item = (genre) => {
        return (<Dropdown.Item value={genre} onClick={(e) => this.props.onChange(genre)} >
            {genre}
        </Dropdown.Item>)
    }

    render() {
        return (
            <div className={'search-container'}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        {this.props.selected_genre}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu' variant="dark">
                        {genres.map(this.genre_item)}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}