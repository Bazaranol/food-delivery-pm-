import { Button, Card, Form } from "react-bootstrap";

export const Login = () => {
  return (
    <Card.Body>
      <Form>
        <h1>Авторизация</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-3">
          Войти
        </Button>
        <Form.Label className="text-muted me-2">Нет аккаунта?</Form.Label>
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </Card.Body>
  );
};
