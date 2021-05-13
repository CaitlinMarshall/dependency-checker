public with sharing class DependencyController {
    
    @AuraEnabled(cacheable=true)
    public static List<PackageLicense> getNamespaces(){
      
        List<PackageLicense> allNamespaces = [SELECT NamespacePrefix FROM PackageLicense];
        return allNamespaces;
    }

    
    @AuraEnabled(cacheable=true)
    public static String getDependencies(String endPoint, String method, String sid) {
        
        try
        {
            HttpRequest toolingRequest = new HttpRequest();
            toolingRequest.setEndpoint('callout:Dependency_Checker/services/data/v51.0/tooling/query/?q=select+MetadataComponentId,+MetadataComponentType,+MetadataComponentName,+RefMetadataComponentName,+RefMetadataComponentType+from+MetadataComponentDependency+where+RefMetadataComponentNamespace+=+\'newpbo\'+AND+MetadataComponentNamespace+=\'\'');
            toolingRequest.setMethod('GET');
            Http http = new Http();
            HTTPResponse toolingResponse = http.send(toolingRequest);
            System.debug(JSON.serialize(toolingResponse.getBody()));
            return toolingResponse.getBody();
        }
        catch(Exception ex)
        {
            system.debug('Exception in tooling API Call:'+ ex.getMessage());
            return ex.getMessage();
        }
 
}
}
