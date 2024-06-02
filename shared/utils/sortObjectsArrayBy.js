"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};
const sortObjectsArrayBy = (array, fieldPath, ascending = true, transformBeforeComparisonHandler = undefined) => {
    const arrSorted = array.sort((a, b) => {
        const aNestedValue = getNestedValue(a, fieldPath);
        const bNestedValue = getNestedValue(b, fieldPath);
        const aValue = transformBeforeComparisonHandler
            ? transformBeforeComparisonHandler(aNestedValue)
            : aNestedValue;
        const bValue = transformBeforeComparisonHandler
            ? transformBeforeComparisonHandler(bNestedValue)
            : bNestedValue;
        if (aValue === undefined && bValue === undefined)
            return 0;
        if (aValue === undefined)
            return ascending ? -1 : 1;
        if (bValue === undefined)
            return ascending ? 1 : -1;
        if (aValue < bValue)
            return ascending ? -1 : 1;
        if (aValue > bValue)
            return ascending ? 1 : -1;
        return 0;
    });
    return arrSorted;
};
exports.default = sortObjectsArrayBy;
