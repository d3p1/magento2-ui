/**
 * @description RequireJS configuration
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        Add grid filters dependency to allow the use of the
 *              notification widget that caused
 *              the 'notification is not a function' error
 */
var config = {
    shim: {
        'Magento_Ui/js/grid/filters/filters': ['D3p1_Ui/js/bootstrap'],
    },
}
