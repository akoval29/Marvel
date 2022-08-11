import Spinner from '../components/spinner/spinner';
import ErrorMSG from '../components/ErrorMSG/errorMSG';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <ErrorMSG/>;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;