import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';


// const onChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const onSearch = (value) => {
//     console.log('search:', value);
// };

const ModifPrecioAbonoForm = ({ handleSendForm, abono }) => {
    const [form] = Form.useForm();
    const [loading] = useState(false);

    useEffect(() => {
        // console.log("socio recibido:", socio);
        if (abono) {
            //   form.setFieldsValue(socio);
            form.setFieldsValue({
                ...abono,
                _id: abono._id,
                // fechaNac: socio.fechaNac ? dayjs(socio.fechaNac) : null,
            });
        }

    }, [abono, form]);

    const onFinish = (values) => {
        // handleSendForm(values);
        // console.log("ONFINISH",values);
        // console.log("Valores enviados:", values);
        if (handleSendForm) {
            // const abonoConId = { ...values, _id: abono?._id }; // Agregar _id del abono seleccionado
            handleSendForm({ ...values, _id: abono?._id });
            // handleSendForm(values);

        // console.log("Abono seleccionado con id:", abonoConId);
        } else {
            console.error('No se recibió la función handleSendForm');
        }
    };

    return (
        <Form layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{ maxWidth: 400 }}
            initialValues={{ nombreAbono: '', precio: '', duracionDias: '' }}>
            <Form.Item label="Descripción Abono" name="nombreAbono" rules={[{ required: true, message: 'Por favor, ingrese el nombre .' }]}>
                <Input variant="filled" disabled placeholder="Descripción Abono" />
            </Form.Item>
            <Form.Item label="Precio" name="precio" type="number" rules={[{ required: true, message: 'Por favor, ingrese el precio del abono.' }]}>
                <Input placeholder="Precio" />
            </Form.Item>
            <Form.Item label="Duración en días" name="duracionDias" type="number" rules={[{ required: true, message: 'Por favor, ingrese la duración en días.' }]}>
                <Input variant="filled" disabled placeholder="Duración" />
            </Form.Item>
            <Form.Item>
                {/* <Button type="primary" onClick={handleSendForm}>
                                Guardar
                            </Button> */}
                <Button type="primary" htmlType="submit" loading={loading}>
                    Enviar
                </Button>
                {loading && <p>Enviando datos...</p>}
            </Form.Item>

        </Form>
    );
};

export default ModifPrecioAbonoForm;