
import PropTypes from 'prop-types';

export const LayoutPrincipal = ({children}) => {
  return (
    <main className="ml-36 mt-12 bg-slate-100 shadow-md rounded-2xl p-8 h-full mr-24">
      {children}
    </main>
  )
}

LayoutPrincipal.propTypes = {
  children: PropTypes.node.isRequired,
};
