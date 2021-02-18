export const matrixPersistenceKey = "matrix_persistent_storage";
export const operationsPersistenceKey = "operations_persistent_storage";
export const firstOperationsState = [{prevMatrix: [[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]]]}];
export const firstMatrixState = [[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]]];

export const getOperations = () => {
    const operationsFromStorage = localStorage.getItem(operationsPersistenceKey);
    const operationsObject = JSON.parse(operationsFromStorage);
    const operations = operationsFromStorage === null ? firstOperationsState : operationsObject;

    return operations;
}

export const getMatrix = () => {
    const matrixFromStorage = localStorage.getItem(matrixPersistenceKey);
    const matrixObject = JSON.parse(matrixFromStorage);
    console.log(matrixObject)
    const matrix = matrixFromStorage === null ? firstMatrixState : matrixObject;

    return matrix;
}