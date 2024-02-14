import { Button, Form } from "react-bootstrap";
import styles from "./TableForm.module.scss";

const TableForm = ({ tableId }) => {

    return(
        <Form>
            <div className={styles.line}>
                <strong>Status:</strong>
                <Form.Select 
                    style={{ width: '220px', marginLeft: '15px'}}
                    aria-label="Default select example"
                    // value=
                    // onChange= 
                    >
                    <option>Select status...</option>
                </Form.Select>
            </div>
            <div className={styles.line}>
                <strong>People:</strong>
                <Form.Control
                    className={styles.input}
                    style={{ width: '50px' }}
                    value="2"
                    // onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                    />
                <span>/</span>
                <Form.Control
                    className={styles.input}
                    style={{ width: '50px' }}
                    value="2"
                    // onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                    />
            </div>
            <div className={styles.line}>
                <strong>Bill:</strong>
                <span className={styles.bill}>$</span>
                <Form.Control
                    className={styles.input}
                    style={{ width: '50px'}}
                    value="345"
                    // onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                    />
            </div>
            <Button variant="primary" type="submit">Update</Button>
        </Form>
    );
};

export default TableForm;