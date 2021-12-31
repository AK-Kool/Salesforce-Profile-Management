import { LightningElement } from 'lwc';

export default class ProfileOne extends LightningElement 
{
    _hasData = false;

    get getDataStatus()
    {
        return this._hasData;
    }
}