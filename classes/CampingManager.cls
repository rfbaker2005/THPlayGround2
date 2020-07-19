/***
 * Used to experiment with camping REST Api
 */
@RestResource(urlMapping='/CampingItems/*')
global with sharing class CampingManager {

    @HttpGet
    global static String CampingManager() {
        return NULL;
    }
}