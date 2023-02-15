import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

export const Registation = () => {
  return (
    <Card.Body>
      <Form>
        <h1>Регистрация нового пользователя</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ФИО</Form.Label>
          <Form.Control type="email" placeholder="Введите своё ФИО" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Пол</Form.Label>
          <Form.Select>
            <option>Муж</option>
            <option>Жен</option>
            <option>Боевой вертолёт</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="phone" placeholder="+7(xxx)xxx-xx-xx" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Дата Рождения</Form.Label>
          <Form.Control type="date" placeholder="дд.мм.гг" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Дата Рождения</Form.Label>
          <Form.Control type="Адрес" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@mail.com" />
          <Form.Text className="text-muted">
            Email будет использоваться для входа в систему.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </Card.Body>
  );
};
