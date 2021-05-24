public with sharing class DependencyController {
    
    @AuraEnabled(cacheable=true)
    public static String getSessionID(){
        return Page.SessionId.getContent().toString();
    }

    @AuraEnabled(cacheable=true)
    public static List<PackageLicense> getNamespaces(){
      
        List<PackageLicense> allNamespaces = [SELECT NamespacePrefix FROM PackageLicense];
        return allNamespaces;
    }

    
    @AuraEnabled(cacheable=true)
    public static String getDependencies(String namespace) {
        
        try
        {
            HttpRequest toolingRequest = new HttpRequest();
            toolingRequest.setEndpoint(Url.getOrgDomainUrl().toExternalForm()
            + '/services/data/v51.0/tooling/query/?q=select+MetadataComponentId,+MetadataComponentType,+MetadataComponentName,+RefMetadataComponentName,+RefMetadataComponentType+from+MetadataComponentDependency+where+RefMetadataComponentNamespace+=+\''+namespace+'\'+AND+MetadataComponentNamespace+=\'\'');
            toolingRequest.setMethod('GET');
            toolingRequest.setHeader('Authorization', 'Bearer ' + getSessionID());
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
