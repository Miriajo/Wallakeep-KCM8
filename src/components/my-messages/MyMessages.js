import React, {Component} from 'react';

import MessageContext from '../../services/MessagesContext'

export default class MyMessages extends Component {
    render() {
        let messages = this.context;

        let i = 0;

        if (!messages) messages = [];

        return (
            <div>
                <h4 className={`ml-2 mb-4`}>Your messages</h4>
                <table style={{width: "100%"}}>
                    <tbody>
                    <tr>
                        <th>
                            Subject
                        </th>
                        <th>
                            Message
                        </th>
                    </tr>
                    {/*4. Mostrar los mensajes en la tabla a través de una función map*/}
                    {messages.map((msg) => (
                        <tr key={i += 1}>
                            <td>
                                {msg.subject}
                            </td>
                            <td>
                                {msg.message}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

// 4. Añadir el contextType para que así el componente pueda usar el contexto (MyMessages.contextType...)
MyMessages.contextType = MessageContext;