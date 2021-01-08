import React from 'react';
import Router from "next/router";
import withGA from 'next-ga';

function MyApp({Component,pageProps}){
    return <Component {...pageProps} />
}

export default withGA("UA-156885111-1", Router)(MyApp);