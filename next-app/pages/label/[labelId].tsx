import React from 'react';
import { useRouter } from 'next/router';
import LayoutWrapper from '../../components/layout';

const LabelPage = () => {
    const router = useRouter()
    const { labelId } = router.query;
    return (
        <LayoutWrapper>
            <div>Label Page: {labelId}</div>
        </LayoutWrapper>
    )
};

export default LabelPage;