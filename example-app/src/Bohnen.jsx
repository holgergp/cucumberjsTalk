import React from 'react';
import {connect} from 'react-redux';
import {updateData} from './reducer';

const Bohnen = ({bohnen, updateData}) => {
    return (<div className="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>Bohnenart</th>
                    <th>Preis beim Händler in Euro</th>
                    <th>Marge in Prozent</th>
                    <th>Rabatt</th>
                    <th>Preis im Laden in Euro ohne Rabatt</th>
                    <th>Preis im Laden</th>
                </tr>
            </thead>
            <tbody>
                {bohnen && bohnen.map((bohne) => (
                    <tr key={bohne.id}>
                        <td><input type="text" id="art" onChange={(event) => updateData({...bohne, art: event.target.value})} value={bohne.art}/></td>
                        <td><input type="number" id="ekp" onChange={(event) => updateData({...bohne, ekp: event.target.value})} value={bohne.ekp}/></td>
                        <td><input type="number" id="marge" disabled={true} onChange={(event) => updateData({...bohne, marge: event.target.value})}
                            value={bohne.marge}/></td>
                        <td><input type="number" id="rabatt" onChange={(event) => updateData({...bohne, rabatt: event.target.value})} value={bohne.rabatt}/>
                        </td>
                        <td><input type="number" id="vkp" onChange={(event) => updateData({...bohne, vkp: event.target.value})} value={bohne.vkp}/></td>
                        <td><input type="number" id="vkpRabatt" disabled={true} onChange={(event) => updateData({...bohne, vkpRabatt: event.target.value})} value={bohne.vkpRabatt}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);
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
)(Bohnen);