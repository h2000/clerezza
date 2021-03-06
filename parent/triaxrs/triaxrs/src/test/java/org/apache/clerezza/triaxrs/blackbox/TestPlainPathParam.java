/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.apache.clerezza.triaxrs.blackbox;

import java.net.URLEncoder;
import static org.easymock.EasyMock.expect;
import static org.easymock.EasyMock.replay;
import static org.junit.Assert.assertEquals;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import org.easymock.EasyMock;
import org.junit.Test;
import org.apache.clerezza.triaxrs.JaxRsHandler;
import org.apache.clerezza.triaxrs.testutils.HandlerCreator;
import org.wymiwyg.wrhapi.Method;
import org.wymiwyg.wrhapi.Request;
import org.wymiwyg.wrhapi.RequestURI;
import org.wymiwyg.wrhapi.Response;


public class TestPlainPathParam {

	private static String handlePathParamValue1;
	private static String handlePathParamValue2;

	@Path("/prefix/{value1}/fix")
	public static class MyResource {

		@GET
		@Path("{value2}")
		public void handleGet(@PathParam("value1") String value1, @PathParam("value2") String value2) {
			handlePathParamValue1 = value1;
			handlePathParamValue2 = value2;
		}
	}

	@Test
	public void testPathParam() throws Exception {

		JaxRsHandler handler = HandlerCreator.getHandler(MyResource.class);
		Request requestMock = EasyMock.createNiceMock(Request.class);
		Response responseMock = EasyMock.createNiceMock(Response.class);
		expect(requestMock.getMethod()).andReturn(Method.GET).anyTimes();
		RequestURI requestURI = EasyMock.createNiceMock(RequestURI.class);
		String value1 = "foo";
		String value2 = "bar";
		expect(requestURI.getPath()).andReturn("/prefix/"+value1+"/fix/"+value2).anyTimes();
		expect(requestMock.getRequestURI()).andReturn(requestURI).anyTimes();
		replay(requestMock);
		replay(requestURI);
		replay(responseMock);
		handler.handle(requestMock, responseMock);
		assertEquals(value1, handlePathParamValue1);
		assertEquals(value2, handlePathParamValue2);
	}
	
	@Test
	public void testPathParamDecoding() throws Exception {

		JaxRsHandler handler = HandlerCreator.getHandler(MyResource.class);
		Request requestMock = EasyMock.createNiceMock(Request.class);
		Response responseMock = EasyMock.createNiceMock(Response.class);
		expect(requestMock.getMethod()).andReturn(Method.GET).anyTimes();
		RequestURI requestURI = EasyMock.createNiceMock(RequestURI.class);
		String value1 = "f#o";
		String value2 = "b/a/r";
		expect(requestURI.getPath()).andReturn("/prefix/"+URLEncoder.encode(value1,"utf-8")+"/fix/"+URLEncoder.encode(value2, "utf-8")).anyTimes();
		expect(requestMock.getRequestURI()).andReturn(requestURI).anyTimes();
		replay(requestMock);
		replay(requestURI);
		replay(responseMock);
		handler.handle(requestMock, responseMock);
		assertEquals(value1, handlePathParamValue1);
		assertEquals(value2, handlePathParamValue2);

	}
}

