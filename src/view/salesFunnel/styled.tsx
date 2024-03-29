import styled from 'styled-components';

export const NavContainer = styled.nav`
    border: 1px solid pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinkContainer = styled.div`
    border: 1px solid cyan;
    display: flex;
    justify-content: flex-start;
    a {
        display: flex;
        align-items: center;
    }
    img {
        height: 28.4px;
        width: 28.4px;
        padding: 5px;
        border: 2px solid #004DA9;
        border-radius: 50%;
        box-sizing: border-box;
        margin-right: 10.6px;
    }
`;

//**************View1************
export const ContainerDownload = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    h2 {
        color: #636363;
        font-size: 15.6px;
        span {
            color: #2F3640;
        }
    }
    div {
        display: flex;
        align-items: center;
        h3 {
            color: #70A1FF;
            font-size: 12.8px;
            margin-left: 12px;
        }
        img {
            height: 19px;
        }
    }
`;
//**************Table************
export const ContainerTable = styled.div`
    border: 1px solid red;
    overflow-x: scroll;

`;
export const Table = styled.table`
    overflow-x: scroll;
    border:1px solid green;
    border-collapse: collapse;
    thead {
        tr {
            th {
                color: #2F3640;
                font-size: 11.3px;
                font-weight: bold;
                white-space: nowrap;
                padding: 0 13.8px;
                border: 1px solid pink;
                text-align: left;
                
            }
        }
    }
    tbody {
        tr {
            height: auto;
            border-bottom: 1px solid  #E6E6E6;
            td {
                padding: 0 13.8px;
                margin: 0;
                white-space: nowrap;
                border: 1px solid pink;
                color: #989DA2;
                font-size: 9.9px;
                height: 57px;
                p {
                    margin: 0;
                }
            }
        }
    }
`;

//**************+ */Container modal *************+
export const ContainerModal = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    display: grid;
    grid-template-columns: 267px 1fr;
    overflow: hidden;
    position: relative;
    h1 {
        color: #70A1FF;
        font-size: 25px;
    }
    form {
        width: 401px;
        padding: 0 51px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ContainerButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    img {
        width: 2px;
        height: 20px;
    }
    h1 {margin:0;}
`;
export const DobleInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 7.8px;

`;
export const ContainerInput = styled.div`
    
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        select, textarea {
            width: 100%;
        }
    
`;
