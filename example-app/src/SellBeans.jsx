import React from 'react';
import {connect} from 'react-redux';
import {updateData} from './reducer';

const SellBeans = ({bohnen,updateData}) => {
    return (<div className="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>Bohnenart</th>
                    <th>Preis beim Händler in Euro</th>
                    <th>Marge in Prozent</th>
                    <th>Preis im Laden in Euro</th>
                </tr>
            </thead>
            <tbody>
                {bohnen.map((bohne) => (
                    <tr key={bohne.id}>
                        <td><input type="text" onChange={(event)=> updateData({...bohne, art: event.target.value})} value={bohne.art}/></td>
                        <td><input type="number" onChange={(event)=> updateData({...bohne, ekp: event.target.value})} value={bohne.ekp}/></td>
                        <td><input type="number" onChange={(event)=> updateData({...bohne, marge: event.target.value})}value={bohne.marge}/></td>
                        <td><input type="number" onChange={(event)=> updateData({...bohne, vkp: event.target.value})} value={bohne.vkp}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
};

const mapStateToProps = state => ({
    bohnen: state.bohnen
});

const mapDispatchToProps = {
    updateData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SellBeans);