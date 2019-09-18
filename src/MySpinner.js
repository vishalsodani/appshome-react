import React from 'react';
import { Spinner } from 'react-bootstrap';
export default function MySpinner() {
    return (
        <div className="container vh-100">
            <div class="d-flex align-items-center justify-content-center h-100">
                <Spinner animation="border" role="status" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </div>
    );
}