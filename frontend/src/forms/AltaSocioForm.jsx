import React, { useEffect, useState } from 'react';
import { Form, Input, Button, AutoComplete, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
// const { Option } = Select;

dayjs.extend(customParseFormat);
// const dateFormat = 'YYYY/MM/DD';
// const dateFormat = 'DD/MM/YYYY';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

// const onChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const onSearch = (value) => {
//     console.log('search:', value);
// };
// const AltaSocioForm = ({ options, abonos }) => {
// const AltaSocioForm = ({ options }) => {
const AltaSocioForm = ({ options, socio }) => {

    const [form] = Form.useForm();
    // const [loading, setLoading] = useState(false);
    const [loading] = useState(false);

    // const handleSubmit = async (values) => {
    //     // console.log("values"+JSON.stringify(values));
    //     // values.telefono
    //     setLoading(true);
    //     try {
    //         const response = await fetch('http://localhost:4040/socios', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(values),
    //         });
    //         if (!response.ok) {
    //             throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
    //         }

    //         const result = await response.json();
    //         alert(result.message || 'Formulario enviado con éxito');
    //         form.resetFields(); 

    //     } catch (error) {
    //         console.error('Error al enviar el formulario:', error);
    //         alert(`Error al enviar los datos ${error.message}`);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    useEffect(() => {
        if (socio) {
            //   form.setFieldsValue(socio);
            form.setFieldsValue({
                ...socio,
                fechaNac: socio.fechaNac ? dayjs(socio.fechaNac) : null,
            });
        }
    }, [socio, form]);
    const handleSubmit = async (formData) => {
        try {
            // console.log(formData);
            const response = await fetch('http://localhost:4040/socios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            // console.log("body en el form:"+body);
            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            const result = await response.json();
            alert(result.message || 'Socio creado con éxito');
            // BORRAR LOS CAMPOS
            // Limpiar los campos del formulario
            form.resetFields();
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            alert('Error al crear el socio');
        }
    };

    return (
        <Form layout="vertical"
            form={form}
            style={{ maxWidth: 400 }}
            onFinish={handleSubmit}
            initialValues={{ nombre: '', apellido: '', correo: '', telefono: '', abono: '', fechaNac: '' }}>
            <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Por favor, ingrese el nombre.' }]}>
                <Input placeholder="Nombre" />
            </Form.Item>
            <Form.Item label="Apellido" name="apellido" rules={[{ required: true, message: 'Por favor, ingrese el apellido.' }]}>
                <Input placeholder="Apellido" />
            </Form.Item>
            <Form.Item label="DNI" name="dni" type="number" rules={[{ required: true, message: 'Por favor, ingrese el DNI.' }]}>
                <Input placeholder="DNI" />
            </Form.Item>
            <Form.Item label="Teléfono" name="telefono" type="number" rules={[{ required: true, message: 'Por favor, ingrese un teléfono.' }]} >
                <Input placeholder="Teléfono" />
            </Form.Item>
            <Form.Item label="E-mail" name="correo" type="email" rules={[
                { required: true, message: 'Por favor, ingrese un correo.' },
                { message: 'El correo no es válido.' },
            ]}>
                <AutoComplete
                    style={{ width: 200 }}
                    placeholder="E-mail"
                    // onSearch={handleSearch}
                    options={options} //mail options
                />
            </Form.Item>
            <Form.Item label="Fecha de Nacimiento" name="fechaNac" rules={[{ required: true, message: 'Por favor, seleccione la fecha de nacimiento.' }]} >
                <Space direction="vertical" size={12}>
                    {/* <DatePicker defaultValue={dayjs('01/01/2024', dateFormatList[0])} format={dateFormatList} /> */}
                    <DatePicker format={dateFormatList} />
                </Space>
            </Form.Item>
            {/* <Form.Item label="Tipo de Abono" rules={[{ required: true, message: 'Por favor, seleccione un abono.' }]} >
                <Select
                    showSearch
                    placeholder="Seleccione el tipo de Abono"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                    options={abonos}
                />
            </Form.Item> */}
            <Form.Item>
                {/* <Button type="primary" onClick={handleSendForm}>
                    Guardar
                </Button> */}
                <Button type="primary" htmlType="submit" loading={loading}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AltaSocioForm;
