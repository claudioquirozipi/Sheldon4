import * as React from 'react';

import CsvLoader1 from '../../view/csvLoader/csvL1';
import CsvLoader2 from '../../view/csvLoader/csvL2';
import CsvLoader3 from '../../view/csvLoader/csvL3';

function ControllerCsvLoader() {
    return(
        <>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>
            <div><CsvLoader1 /></div>
            <div><CsvLoader2 /></div>
            <div><CsvLoader3 /></div>
        </>
    )
}

export default ControllerCsvLoader;