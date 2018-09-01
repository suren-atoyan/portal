import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icons
import FileIcon from '@material-ui/icons/Notes';

const File = ({ name, handleFileOpen, handleContextMenuOpen }) => (
  <ListItem className="files__item file">
    <div className="files__summary">
      <ListItemIcon><FileIcon /></ListItemIcon>
      <Button
        onContextMenu={handleContextMenuOpen}
        onClick={_ => handleFileOpen(name)}
      >
        <ListItemText primary={name}/>
      </Button>
    </div>
  </ListItem>
);

File.propTypes = {
  name: PropTypes.string.isRequired,
  handleFileOpen: PropTypes.func,
  handleContextMenuOpen: PropTypes.func.isRequired,
};

File.defaultProps = {
  handleFileOpen: _ => {},
};

export default File;
