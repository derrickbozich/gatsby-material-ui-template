import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';

const SimpleDialog = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const iframe = React.useRef(null);

    React.useEffect(() => {

        if (iframe.contentWindow) {
            console.log('yoo')
            iframe.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'playVideo' }),
                '*'
            );

        }
    })



    return (
        <Dialog
            onClose={handleClose}
            open={open}
            maxWidth={`lg`}
            disableScrollLock={true}
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    
            <iframe
                width="860"
                height="515"
                src={selectedValue}
                ref={iframe}
                title={`YouTube video player ${selectedValue}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>


        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog