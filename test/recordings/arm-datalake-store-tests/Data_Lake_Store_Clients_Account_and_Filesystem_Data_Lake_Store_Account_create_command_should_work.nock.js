// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658?api-version=2015-10-01-preview', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"bef4df88-4c87-47e3-af6b-fb304421feed\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658\",\"name\":\"xplattestadls5658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658/operationresults/0?api-version=2015-10-01-preview',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/bef4df88-4c87-47e3-af6b-fb304421feed0?api-version=2015-10-01-preview&expanded=true',
  'x-ms-request-id': 'aa954a8e-e1d4-434b-a4fd-2495e78e2657',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0ca07d2b-6f45-47e2-b88c-ff6562a42116',
  'x-ms-routing-request-id': 'WESTUS:20160701T191624Z:0ca07d2b-6f45-47e2-b88c-ff6562a42116',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:16:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658?api-version=2015-10-01-preview', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"bef4df88-4c87-47e3-af6b-fb304421feed\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658\",\"name\":\"xplattestadls5658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658/operationresults/0?api-version=2015-10-01-preview',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/bef4df88-4c87-47e3-af6b-fb304421feed0?api-version=2015-10-01-preview&expanded=true',
  'x-ms-request-id': 'aa954a8e-e1d4-434b-a4fd-2495e78e2657',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0ca07d2b-6f45-47e2-b88c-ff6562a42116',
  'x-ms-routing-request-id': 'WESTUS:20160701T191624Z:0ca07d2b-6f45-47e2-b88c-ff6562a42116',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:16:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/bef4df88-4c87-47e3-af6b-fb304421feed0?api-version=2015-10-01-preview&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b3f24b5e-1980-4cac-bddf-5b56dd77b86e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '49e956f7-131e-436c-af3f-2293d0e7637d',
  'x-ms-routing-request-id': 'WESTUS:20160701T191655Z:49e956f7-131e-436c-af3f-2293d0e7637d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:16:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/bef4df88-4c87-47e3-af6b-fb304421feed0?api-version=2015-10-01-preview&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b3f24b5e-1980-4cac-bddf-5b56dd77b86e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '49e956f7-131e-436c-af3f-2293d0e7637d',
  'x-ms-routing-request-id': 'WESTUS:20160701T191655Z:49e956f7-131e-436c-af3f-2293d0e7637d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:16:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls5658.azuredatalakestore.net\",\"accountId\":\"bef4df88-4c87-47e3-af6b-fb304421feed\",\"creationTime\":\"2016-07-01T19:16:28.0197749Z\",\"lastModifiedTime\":\"2016-07-01T19:16:28.0197749Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658\",\"name\":\"xplattestadls5658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '672',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '86a7dcbc-7741-469e-a793-9e22e5715690',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'fe529c1a-f0ba-4431-9c0f-b38891ce04ed',
  'x-ms-routing-request-id': 'WESTUS:20160701T191655Z:fe529c1a-f0ba-4431-9c0f-b38891ce04ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:16:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls5658.azuredatalakestore.net\",\"accountId\":\"bef4df88-4c87-47e3-af6b-fb304421feed\",\"creationTime\":\"2016-07-01T19:16:28.0197749Z\",\"lastModifiedTime\":\"2016-07-01T19:16:28.0197749Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5658\",\"name\":\"xplattestadls5658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '672',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '86a7dcbc-7741-469e-a793-9e22e5715690',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'fe529c1a-f0ba-4431-9c0f-b38891ce04ed',
  'x-ms-routing-request-id': 'WESTUS:20160701T191655Z:fe529c1a-f0ba-4431-9c0f-b38891ce04ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:16:54 GMT',
  connection: 'close' });
 return result; }]];