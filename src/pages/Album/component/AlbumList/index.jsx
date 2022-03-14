import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};

AlbumList.defaultProps = {
    albumList : [],
}

function AlbumList(props) {
    const {albumList} = props;
    
    return (
        <ul>
            {albumList.map(album => (
                <li key={album.id}>{album.name}</li>
            ))}
        </ul>
    );
}

export default AlbumList;