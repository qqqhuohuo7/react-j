/**
 * Created by pei_zhou on 2017-10-18 13:59:51 
 */
import { connect } from 'react-redux'
import PageA from 'component/page/project1/page-A';
import { getData } from '../../action/project1/page-A';

function mapStateToProps(state) {
    return state.toJSON().pageA
}
function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData())
    }
}
const App = connect(mapStateToProps, mapDispatchToProps)(PageA)

export default App;