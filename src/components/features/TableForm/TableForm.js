import { Button, Form } from "react-bootstrap";
import styles from "./TableForm.module.scss";
import { useState } from "react";

const TableForm = ({ tableId, ...props }) => {
    const [status, setStatus] = useState(props.status);
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
    const [bill, setBill] = useState(props.bill);


    return(
        <Form>
            <div className={styles.line}>
                <strong>Status:</strong>
                <Form.Select 
                    style={{ width: '220px', marginLeft: '15px'}}
                    aria-label="Default select example"
                    value={status}
                    onChange={e => setStatus(e.target.value)} 
                    >
                    <option>{status}</option>
                </Form.Select>
            </div>
            <div className={styles.line}>
                <strong>People:</strong>
                <Form.Control
                    className={styles.input}
                    style={{ width: '50px' }}
                    value={peopleAmount}
                    onChange={e => setPeopleAmount(e.target.value)}
                    type="text" placeholder="Enter title"
                    />
                <span>/</span>
                <Form.Control
                    className={styles.input}
                    style={{ width: '50px' }}
                    value={maxPeopleAmount}
                    onChange={e => setMaxPeopleAmount(e.target.value)}
                    type="text" placeholder="Enter title"
                    />
            </div>
            <div className={styles.line}>
                <strong>Bill:</strong>
                <span className={styles.bill}>$</span>
                <Form.Control
                    className={styles.input}
                    style={{ width: '50px'}}
                    value={bill}
                    onChange={e => setBill(e.target.value)}
                    type="text" placeholder="Enter title"
                    />
            </div>
            <Button variant="primary" type="submit">Update</Button>
        </Form>
    );
};

export default TableForm;