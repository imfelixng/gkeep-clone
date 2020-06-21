import { Button } from 'antd';
import LayoutWrapper from '../components/layout';

function Home() {
    return (
        <LayoutWrapper>
            <h1 className = "text-blue-600">Test</h1>
            <Button danger>Demo</Button>
        </LayoutWrapper>
    )
}

export default Home