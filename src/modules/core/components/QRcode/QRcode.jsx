import QRCode from "react-qr-code";
import PropTypes from 'prop-types';
export const QRcode = ({tokenQR = 'Invalid-Token'}) => {
  return (
    <div className="flex justify-center items-center mt-2" style={{ background: 'white', padding: '16px' }}>
        <QRCode value={tokenQR}/>
    </div>
  )
}

QRcode.propTypes = {
  tokenQR: PropTypes.string.isRequired,
};

