import React from 'react';
import './index.less';
import { IntlType } from '@ant-design/pro-provider';
export interface TableAlertProps<T> {
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    alertInfoRender?: ((props: {
        intl: IntlType;
        selectedRowKeys: (number | string)[];
        selectedRows: T[];
    }) => React.ReactNode) | false;
    onCleanSelected: () => void;
    alertOptionRender?: false | ((props: {
        intl: IntlType;
        onCleanSelected: () => void;
    }) => React.ReactNode);
}
declare const TableAlert: <T, U = {}>({ selectedRowKeys, onCleanSelected, selectedRows, alertInfoRender, alertOptionRender, }: TableAlertProps<T>) => JSX.Element | null;
export default TableAlert;
