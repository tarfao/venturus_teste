import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import './styles.css'

const columns = [
    { id: 'name', label: 'Name', minWidth: 50 },
    { id: 'description', label: 'Description', minWidth: 20 },
];

function createData(name, description) {
    return { name, description };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
        minHeight: 440
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);

    const getCountries = async () => {
        const { data } = await axios.get('https://v3.football.api-sports.io/countries', {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-apisports-key': 'e99cdab266c03e180f94f29484657586'
            }
        });
        setRows(data.response.map((country) => createData(country.name, country.code)));
    }

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className='table-row-app'>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell align='right'>
                                        <CreateIcon className='app-actions' />
                                    </TableCell>
                                    <TableCell>
                                        <DeleteIcon className='app-actions' />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
