/**
 * @description UI bootstrap JS logic
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        Add grid filters dependency to allow the use of the
 *              notification widget
 *              that caused the 'notification is not a function' error
 */
define(['jquery', 'mage/backend/notification'], function ($, notification) {
    var bootstrap = function () {
        notification({}, $('body'))
    }

    $(bootstrap)
})
