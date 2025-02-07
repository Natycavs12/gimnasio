import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
// const { Option } = Select;


const onChange = (value) => {
    console.log(`selected ${value}`);
};

const onSearch = (value) => {
    console.log('search:', value);
};

const CrearClaseForm = ({ handleSendForm, clase, options }) => {
    const [form] = Form.useForm();
    const [loading] = useState(false);
    const horarios = [
        {
            value: '09:00',
            label: '09:00',
        },
        {
            value: '10:00',
            label: '10:00',
        },
        {
            value: '11:00',
            label: '11:00',
        },
        {
            value: '12:00',
            label: '12:00',
        },
        {
            value: '13:00',
            label: '13:00',
        },
        {
            value: '14:00',
            label: '14:00',
        },
        {
            value: '15:00',
            label: '15:00',
        },
        {
            value: '16:00',
            label: '16:00',
        },
        {
            value: '17:00',
            label: '17:00',
        },
        {
            value: '18:00',
            label: '18:00',
        },
        {
            value: '19:00',
            label: '19:00',
        },
        {
            value: '20:00',
            label: '20:00',
        },
        {
            value: '21:00',
            label: '21:00',
        },

    ]

    const daysOptions = [
        {
            label: 'Lunes',
            value: 'Lunes',
        },
        {
            label: 'Martes',
            value: 'Martes',
        },
        {
            label: 'Miércoles',
            value: 'Miércoles',
        },
        {
            label: 'Jueves',
            value: 'Jueves',
        },
        {
            label: 'Viernes',
            value: 'Viernes',
        },
        {
            label: 'Sábado',
            value: 'Sábado',
        },
        {
            label: 'Domingo',
            value: 'Domingo',
        },
    ];

    useEffect(() => {
        if (clase) {
            //   form.setFieldsValue(socio);
            form.setFieldsValue({
                ...clase,
                // dia: clase.dia ? clase.dia : null,
            });
        }
    }, [clase, form]);

    const onFinish = (values) => {
        // console.log("values CREARCLASEFORM", values);
        handleSendForm(values);
    };

    // const handleSubmit = async (formData) => {
    //     try {
    //         const response = await fetch('http://localhost:4040/clases', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),

    //         });
    //         if (!response.ok) {
    //             throw new Error(`Error del servidor: ${response.status}`);
    //         }

    //         const result = await response.json();
    //         alert(result.message || 'Clase creada con éxito');
    //         // Limpia los campos del formulario
    //         form.resetFields();
    //     } catch (error) {
    //         console.error('Error al enviar los datos:', error);
    //         alert('Error al crear la clase');
    //     }
    // };

    return (
        <Form layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{ maxWidth: 400 }}
            initialValues={{ nombreClase: '', instructor: '', dia: '', hora: '', cupo: '' }}
        >
            <Form.Item label="Clase" name="nombreClase" rules={[{ required: true, message: 'Por favor, ingrese el nombre de la Clase.' }]}>
                <Input placeholder="Nombre de la Clase" />
            </Form.Item>
            {/* <Form.Item label="Profesor/a" name="instructor" rules={[{ required: true, message: 'Por favor, ingrese el nombre y apellido del Profesor/a.' }]}>
                <Input placeholder="Nombre de Profesor/a" />
            </Form.Item> */}
            <Form.Item label="Día" name="dia" rules={[{ required: true, message: 'Por favor, seleccione el día.' }]}>
                <Checkbox.Group options={daysOptions} onChange={onChange} />
            </Form.Item>
            {/* <Form.Item label="Día" name="dia" rules={[{ required: true, message: 'Por favor, seleccione el día.' }]}>
                <DatePicker />
            </Form.Item> */}
            <Form.Item label="Hora de Inicio" name="hora" rules={[{ required: true, message: 'Por favor, seleccione un horario de inicio.' }]}>
                <Select
                    showSearch
                    placeholder="Seleccione el horario de inicio de la clase"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                    options={horarios}
                />
            </Form.Item>
            {/* <Form.Item label="Hora de Fin" rules={[{ required: true, message: 'Por favor, seleccione un horario de fin.' }]} >
                <Select
                    showSearch
                    placeholder="Seleccione el horario de fin de la clase"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                    options={horarios}
                />
            </Form.Item> */}
            <Form.Item label="Cupo" name="cupo" type="number" rules={[{ required: true, message: 'Por favor, ingrese el cupo.' }]} >
                <Input placeholder="Ingrese el cupo inicial" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CrearClaseForm;
