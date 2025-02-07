    import React, { useEffect, useState } from 'react';
    import { Form, Input, Button, AutoComplete, DatePicker, Space, Select } from 'antd';
    import dayjs from 'dayjs';
    import customParseFormat from 'dayjs/plugin/customParseFormat';
    // const { Option } = Select;

    dayjs.extend(customParseFormat);
    // const dateFormat = 'YYYY/MM/DD';
    // const dateFormat = 'DD/MM/YYYY';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
    // const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const AltaSocioForm = ({ handleSendForm, socio, options, abonos }) => {
        // const AltaSocioForm = ({ options,handleSendForm }) => {
            // console.log('handleSendForm recibido:', handleSendForm);
        // console.log("abonos"+abonos);
        const [form] = Form.useForm();
        // const [loading, setLoading] = useState(false);
        const [loading] = useState(false);

        useEffect(() => {
            // console.log("socio recibido:", socio);
            if (socio) {
                //   form.setFieldsValue(socio);
                form.setFieldsValue({
                    ...socio,
                    fechaNac: socio.fechaNac ? dayjs(socio.fechaNac) : null,
                });
            }
        }, [socio, form]);

        // const onFinish = (values) => {
        //     // handleSendForm(values);
        //     // console.log("ONFINISH",values);
        //     // console.log("Valores enviados:", values);
        //     // if (handleSendForm) {
        //         handleSendForm(values);
        //     // } else {
        //     //     console.error('No se recibió la función handleSendForm');
        //     // }
        // };
        const onFinish = (values) => {
            if (socio && socio._id) {
                handleSendForm({ ...values, _id: socio._id }); // Enviar con ID para actualizar
            } else {
                handleSendForm(values); // Crear nuevo socio
            }
        };
        // useEffect(() => {
        //     console.log("Abonos recibidos en AltaSocioForm:", abonos);
        // }, [abonos]);
        return (
            <Form layout="vertical"
                form={form}
                onFinish={onFinish}
                style={{ maxWidth: 400 }}
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
                {/* <Form.Item label="Tipo de Abono" name="nombreAbono" rules={[{ required: true, message: 'Por favor, seleccione un abono.' }]} >
                    <Select
                        showSearch
                        placeholder="Seleccione el tipo de Abono"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        // options={abonos}
                        options={abonos?.map(abono => ({
                            value: abono._id, // Usa el ID del abono como valor
                            label: abono.nombreAbono, // Usa el nombre del abono como etiqueta
                        })) || []}
                    />
                </Form.Item> */}
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

    export default AltaSocioForm;
