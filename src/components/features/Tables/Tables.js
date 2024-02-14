import styles from "./Tables.module.scss";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Tables = ({tables}) => {

    return (
        <div>
            {tables.map(table=>(
            <Card key={table.id} style={{ width: '100%'}}>
                <Card.Body className={styles.body}>
                    <Card.Title style={{ marginBottom: '0'}}>
                        <strong>Table {table.id}</strong>
                    </Card.Title>
                    <Card.Text style={{ marginBottom: '0' }}>
                        <span><strong>Status: </strong>{table.status}</span>
                    </Card.Text>
                    <div  className={styles.button}>
                        <Button variant="primary" as={NavLink} to={"/table/" + table.id}>Show more</Button>
                    </div>
                </Card.Body>
            </Card>
            ))}
        </div>
    );
};

export default Tables;